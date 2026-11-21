import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings', title: 'Site Ayarları', type: 'document',
  fields: [
    defineField({name: 'siteName', title: 'Site adı', type: 'string', initialValue: 'Diş Hekimi Nazlı Subutay'}),
    defineField({name: 'phone', title: 'Telefon', type: 'string'}),
    defineField({name: 'email', title: 'E-posta', type: 'string'}),
    defineField({name: 'addressTr', title: 'Adres (TR)', type: 'text'}),
    defineField({name: 'addressEn', title: 'Address (EN)', type: 'text'}),
    defineField({name: 'patientHoursTr', title: 'Hasta kabul saatleri (TR)', type: 'string'}),
    defineField({name: 'patientHoursEn', title: 'Patient reception hours (EN)', type: 'string'}),
    defineField({name: 'editorName', title: 'Site editörü / içerik sorumlusu', type: 'string'}),
    defineField({name: 'editorEmail', title: 'Editör iletişim e-postası', type: 'string'}),
    defineField({name: 'lastUpdated', title: 'Site son güncelleme tarihi', type: 'date'}),
  ],
})
