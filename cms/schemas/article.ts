import {defineField, defineType} from 'sanity'

export const article = defineType({
  name: 'article', title: 'Rehber Yazısı', type: 'document',
  fields: [
    defineField({name: 'titleTr', title: 'Başlık (TR)', type: 'string', validation: r => r.required()}),
    defineField({name: 'titleEn', title: 'Title (EN)', type: 'string'}),
    defineField({name: 'slugTr', title: 'URL kısa adı (TR)', type: 'slug', options: {source: 'titleTr'}}),
    defineField({name: 'slugEn', title: 'URL slug (EN)', type: 'slug', options: {source: 'titleEn'}}),
    defineField({name: 'category', title: 'Kategori', type: 'string'}),
    defineField({name: 'excerptTr', title: 'Özet (TR)', type: 'text', rows: 3}),
    defineField({name: 'excerptEn', title: 'Excerpt (EN)', type: 'text', rows: 3}),
    defineField({name: 'bodyTr', title: 'İçerik (TR)', type: 'array', of: [{type: 'block'}]}),
    defineField({name: 'bodyEn', title: 'Content (EN)', type: 'array', of: [{type: 'block'}]}),
    defineField({name: 'references', title: 'Kaynaklar', type: 'array', of: [{type: 'url'}]}),
    defineField({name: 'clinicalReviewBy', title: 'Tıbbi kontrol eden', type: 'string'}),
    defineField({name: 'clinicalReviewDate', title: 'Tıbbi kontrol tarihi', type: 'date'}),
    defineField({name: 'lastUpdated', title: 'Son güncelleme', type: 'date'}),
    defineField({name: 'approvedForPublication', title: 'Yayın için hekim onayı', type: 'boolean', initialValue: false}),
  ],
})
