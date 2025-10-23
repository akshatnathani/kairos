package router

import (

	"github.com/gin-gonic/gin"
	"github.com/thakksht/kairos/internal/http/handler"
)

func NewRouter() *gin.Engine {
	router := gin.Default()

	router.GET("/api/health", handler.GetHealth())

	return router
}