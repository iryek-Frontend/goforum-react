let API_ROUTE

process.env.NODE_ENV === 'development'
    ? API_ROUTE = 'http://localhost:8889/api/v1'
    : API_ROUTE = 'http://localhost:8880/api/v1'

export default API_ROUTE