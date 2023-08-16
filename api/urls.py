from django.urls import path
from api import views


from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

app_name = 'api'



urlpatterns = [
    path('', views.getRoutes,name='routes'),
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', views.RegisterView.as_view(), name='auth_register'),
    path('test/', views.testEndPoint, name='test'),
    path('game/', views.NewGameAPIView.as_view(), name='new_game'),
    path('game/<int:pk>/', views.GameAPIView.as_view(), name='game'),
    path('leaderboard/', views.LeaderBoardAPIView.as_view(), name='leaderboard'),
     path('profile/', views.UserProfileAPIView.as_view(), name='profile'),
]