from rest_framework.pagination import LimitOffsetPagination


class ViewsoffsetPagination(LimitOffsetPagination):
    default_limit=100