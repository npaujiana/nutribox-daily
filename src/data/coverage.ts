export interface CoverageArea {
  name: string;
  category: 'priority' | 'regular' | 'confirm';
  label: string;
  description: string;
  estimatedDeliveryTime: string;
}

export const coverageAreas: CoverageArea[] = [
  {
    name: 'BSD City',
    category: 'priority',
    label: 'Area Prioritas Utama',
    description: 'Pusat kawasan residensial & perkantoran BSD (The Breeze, GOP, Foresta, Icon, NavaPark, dll.)',
    estimatedDeliveryTime: '10.30 – 11.30 WIB'
  },
  {
    name: 'Serpong',
    category: 'priority',
    label: 'Area Prioritas Utama',
    description: 'Kawasan Serpong Raya, Rawa Buntu, Cilenggang, dan sekitarnya',
    estimatedDeliveryTime: '10.30 – 11.30 WIB'
  },
  {
    name: 'Gading Serpong',
    category: 'priority',
    label: 'Area Prioritas Utama',
    description: 'Kawasan komersial & perumahan Summarecon & Paramount Gading Serpong',
    estimatedDeliveryTime: '10.45 – 11.40 WIB'
  },
  {
    name: 'Alam Sutera',
    category: 'priority',
    label: 'Area Prioritas Utama',
    description: 'Kawasan perkantoran & perumahan Alam Sutera, Jalur Sutera, dan sekitarnya',
    estimatedDeliveryTime: '10.45 – 11.45 WIB'
  },
  {
    name: 'Bintaro Jaya',
    category: 'priority',
    label: 'Area Prioritas Utama',
    description: 'Sektor 1 s.d. 9 Bintaro Jaya dan area CBD Bintaro',
    estimatedDeliveryTime: '11.00 – 11.45 WIB'
  },
  {
    name: 'Ciputat',
    category: 'regular',
    label: 'Area Reguler',
    description: 'Kawasan Ciputat Timur & Ciputat Raya',
    estimatedDeliveryTime: '10.45 – 11.45 WIB'
  },
  {
    name: 'Pamulang',
    category: 'regular',
    label: 'Area Reguler',
    description: 'Kawasan Pamulang Barat, Timur, dan Villa Pamulang',
    estimatedDeliveryTime: '10.45 – 11.45 WIB'
  },
  {
    name: 'Pondok Aren',
    category: 'regular',
    label: 'Area Reguler',
    description: 'Kawasan Pondok Aren, Jurang Mangu, dan sekitarnya',
    estimatedDeliveryTime: '11.00 – 11.45 WIB'
  },
  {
    name: 'Tangerang Kota (Sebagian)',
    category: 'regular',
    label: 'Area Reguler Terbatas',
    description: 'Wilayah Modernland, Cikokol, dan koridor utama Tangerang',
    estimatedDeliveryTime: '11.00 – 11.45 WIB'
  },
  {
    name: 'Jakarta Selatan & Tangerang Raya Luar',
    category: 'confirm',
    label: 'Konfirmasi Terlebih Dahulu',
    description: 'Pondok Indah, Cilandak, Lebak Bulus, Karawaci, dsb. memerlukan konfirmasi kuota kurir harian.',
    estimatedDeliveryTime: 'Tergantung konfirmasi rute kurir'
  }
];
