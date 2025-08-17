package handler

import (
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
)

func GetHealth() gin.HandlerFunc{
	return func (c *gin.Context) {
		healthJson := map[string]interface{}{
			"status": "healthy",
			"timestamp": time.Now().Format(time.RFC3339),
		}
		c.JSON(http.StatusOK, healthJson)
	}
}

