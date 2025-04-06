from django.urls import path
from . import views

urlpatterns = [
    path("companies/", views.list_of_companies),
    path("companies/<int:id>/", views.company_detail),
    path('companies/<int:company_id>/vacancies', views.vacancies_of_company),
    path('vacancies/', views.list_of_vacancies),
    path('vacancies/<int:vacancy_id>/', views.vacancy_detail),
    path('vacancies/top_ten/', views.top_ten_vacancies),
]