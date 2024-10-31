from aiogram import Router, types

from aiogram.filters import CommandStart
from aiogram.types import Message
from app.bot.keyboards.kbs import main_keyboard

user_router = Router()


@user_router.message(CommandStart())
async def cmd_start(message: Message) -> None:
    welcome_text = (
        "Привет. Это the best place"
    )
    await message.answer(welcome_text, reply_markup=main_keyboard())

# @user_router.message_handler(commands=['buy'])
# async def buy(message: types.Message):
#     await message.reply("Привет")