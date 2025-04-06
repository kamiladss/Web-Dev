from rest_framework import viewsets
from rest_framework.decorators import api_view, action
from rest_framework.response import Response
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer, CompanyBasicSerializer

# Тестовая функция (работает)
@api_view(['GET'])
def test_view(request):  # request передается автоматически
    return Response({"message": "Test successful"})

# Упрощенный ViewSet для компаний
class CompanyBasicViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanyBasicSerializer

# Function-based view (работает)
@api_view(['GET'])
def company_list_basic(request):  # request передается автоматически
    companies = Company.objects.all()
    serializer = CompanyBasicSerializer(companies, many=True)
    return Response(serializer.data)

# Основной ViewSet для компаний
class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

    @action(detail=True, methods=['get'])
    def vacancies(self, request, pk=None):  # request передается автоматически
        company = self.get_object()
        vacancies = company.vacancies.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

# ViewSet для вакансий
class VacancyViewSet(viewsets.ModelViewSet):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

    @action(detail=False, methods=['get'])
    def top_ten(self, request):  # request передается автоматически
        vacancies = Vacancy.objects.all().order_by('-salary')[:10]
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)