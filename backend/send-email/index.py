import json
from typing import Dict, Any
from pydantic import BaseModel, Field, EmailStr, ValidationError

class ContactRequest(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    phone: str = Field(..., min_length=1, max_length=20)
    message: str = Field(..., min_length=1, max_length=1000)

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Бизнес: Обработка контактной формы с визитки менеджера
    Аргументы: event - dict с httpMethod, body
              context - объект с атрибутами request_id, function_name
    Возвращает: HTTP ответ dict
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    body_data = json.loads(event.get('body', '{}'))
    contact_req = ContactRequest(**body_data)
    
    email_content = f"""
    Новая заявка с визитки:
    
    Имя: {contact_req.name}
    Телефон: {contact_req.phone}
    Сообщение: {contact_req.message}
    """
    
    print(f"Email would be sent: {email_content}")
    
    result = {
        'success': True,
        'message': 'Ваше сообщение отправлено! Свяжемся с вами в ближайшее время.',
        'request_id': context.request_id
    }
    
    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        'body': json.dumps(result),
        'isBase64Encoded': False
    }
