import {defineField, defineType} from 'sanity'

export const informationalPage = defineType({
  name: 'informationalPage', title: 'Bilgilendirme Sayfası', type: 'document',
  fields: [
    defineField({name: 'titleTr', title: 'Başlık (TR)', type: 'string', validation: r => r.required()}),
    defineField({name: 'titleEn', title: 'Title (EN)', type: 'string'}),
    defineField({name: 'slug', title: 'URL kısa adı', type: 'slug', options: {source: 'titleTr'}}),
    defineField({name: 'bodyTr', title: 'İçerik (TR)', type: 'array', of: [{type: 'block'}]}),
    defineField({name: 'bodyEn', title: 'Content (EN)', type: 'array', of: [{type: 'block'}]}),
    defineField({name: 'reviewedBy', title: 'Kontrol eden', type: 'string'}),
    defineField({name: 'lastUpdated', title: 'Son güncelleme', type: 'date'}),
  ],
})
