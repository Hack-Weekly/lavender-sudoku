from django.contrib import admin
from django.urls import path
from django import urls
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path,include
from django.contrib.staticfiles.storage import staticfiles_storage
from django.views.generic.base import RedirectView
#from core.views import SetupCompleteView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('api.urls',namespace='api')),
    ]

if settings.DEBUG:
    import debug_toolbar
    #urlpatterns+= [path('', SetupCompleteView.as_view(),name="setup"),]
    urlpatterns+= static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns+= static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    django_toolbar_panel = [
        path('__debug__/', include(debug_toolbar.urls),),
        ] 
    urlpatterns = urlpatterns + django_toolbar_panel