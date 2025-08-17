package main

import (
	"log"
	"net/http"
	"log/slog"
	"fmt"
	"os/signal"
	"syscall"
	"os"
	"context"
	"time"
	"github.com/thakksht/kairos/internal/http/handler"

	"github.com/gin-gonic/gin"
	"github.com/thakksht/kairos/internal/config"
)

func main(){
	cfg := config.MustLoad()

	router := gin.Default()

	router.GET("/api/health", handler.GetHealth())


	server := http.Server{
		Addr:   cfg.HTTPServer.Addr,
		Handler: router,
	}

	slog.Info("Server started", slog.String("address", cfg.HTTPServer.Addr))
	fmt.Printf("server starting on http://%s\n", cfg.HTTPServer.Addr)

	// handle graceful shutdown
	done := make(chan os.Signal, 1)
	signal.Notify(done, os.Interrupt, syscall.SIGINT, syscall.SIGTERM)

	go func(){
		if err := server.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			log.Fatalf("Failed to start server: %s", err.Error())
		}
	}()

	<- done

	slog.Info("Shutting down the server")

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	if err := server.Shutdown(ctx); err != nil {
		slog.Error("Failed to gracefully shutdown the server", "error", err)
	}
	
	slog.Info("Server gracefully stopped")


}