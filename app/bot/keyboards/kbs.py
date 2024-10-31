from aiogram.types import WebAppInfo, InlineKeyboardMarkup
from aiogram.utils.keyboard import InlineKeyboardBuilder
from app.config import settings


def main_keyboard() -> InlineKeyboardMarkup:
    generate_url = settings.BASE_SITE
    kb = InlineKeyboardBuilder()
    kb.button(text="Магазин", web_app=WebAppInfo(url=f"{generate_url}/"))
    kb.adjust(1)
    return kb.as_markup()
