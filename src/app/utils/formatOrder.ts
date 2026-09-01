const ORDER_DIGITS = 2

export const formatOrder = (position: number) =>
  String(position).padStart(ORDER_DIGITS, '0')
