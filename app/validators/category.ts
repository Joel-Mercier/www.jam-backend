import vine from '@vinejs/vine'

export const createCategoryValidator = vine.compile(
  vine.object({
    name: vine.string().minLength(3).trim(),
    image: vine.file({
      size: '1mb',
      extnames: ['jpg', 'png', 'jpeg', 'webp'],
    }).nullable(),
  })
)

export const updateCategoryValidator = vine.compile(
  vine.object({
    name: vine.string().minLength(3).trim(),
    image: vine.file({
      size: '1mb',
      extnames: ['jpg', 'png', 'jpeg', 'webp'],
    }).nullable(),
  })
)
