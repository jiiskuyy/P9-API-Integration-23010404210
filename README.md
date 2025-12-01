cat << 'EOF' > README.md
# Praktikum #9: Integrasi API Eksternal (Modular)

Repository ini berisi implementasi Web Service Engineering modul ke-9. Proyek ini mendemonstrasikan cara membangun backend Node.js yang modular untuk mengintegrasikan API eksternal (REST Countries & OpenWeatherMap) dengan fitur caching, logging, dan dokumentasi API.

## Fitur Utama
* **Arsitektur Modular**: Pemisahan concern yang jelas (Routes, Controllers, Services, Utils).
* **Integrasi Pihak Ketiga**:
    * REST Countries API: Data negara.
    * OpenWeatherMap API: Data cuaca realtime.
* **Performance**: Implementasi NodeCache untuk menyimpan respon API sementara (TTL).
* **Logging**: Menggunakan Morgan untuk mencatat request HTTP.
* **Dokumentasi**: Swagger UI interaktif untuk pengujian endpoint.

## Teknologi yang Digunakan
* Node.js & Express
* Axios (HTTP Client)
* Node-Cache (Caching)
* Morgan (Logger)
* Swagger UI Express (API Docs)
* Dotenv (Environment Variables)

## Struktur Proyek
Sesuai dengan panduan modul praktikum:

```text
P9-API-Integration-230104040210/
├── src/
│   ├── controllers/    # Logika penanganan request & response
│   ├── routes/         # Definisi endpoint
│   ├── services/       # Business logic & panggilan API eksternal
│   ├── middleware/     # Error handling & 404
│   ├── utils/          # Helper (HttpClient, Cache)
│   └── docs/           # Konfigurasi Swagger/OpenAPI
├── .env                # Variabel lingkungan (API Key)
├── server.js           # Entry point aplikasi
└── package.json
Cara Menjalankan
Instalasi Dependensi

Bash

npm install
Konfigurasi Environment (.env) Buat file .env dan tambahkan konfigurasi berikut (sesuaikan API Key OpenWeatherMap Anda):

Cuplikan kode

PORT=3000
OWM_API_KEY=masukkan_api_key_anda_disini
Jalankan Server

Bash

npm start
Server akan berjalan di http://localhost:3000.

Dokumentasi & Pengujian Endpoint
1. Dokumentasi Swagger
Akses dokumentasi interaktif di browser:

URL: http://localhost:3000/docs

2. Endpoint Negara (REST Countries)
Mengambil data negara (disaring field: name, region, capital, population, flags).

Get All Countries

Method: GET

URL: /api/countries

Status: 200 OK

Get By Name (Contoh: Indonesia)

Method: GET

URL: /api/countries/name/indonesia

Response Output:

JSON

{
    "name": {
        "common": "Indonesia",
        "official": "Republic of Indonesia",
        "nativeName": {
            "ind": {
                "official": "Republik Indonesia",
                "common": "Indonesia"
            }
        }
    },
    "capital": ["Jakarta"],
    "region": "Asia",
    "population": 284438782
}
Get By Region (Contoh: Asia)

Method: GET

URL: /api/countries/region/asia

3. Endpoint Cuaca (OpenWeatherMap)
Mengambil data cuaca berdasarkan query kota.

Get Weather by City (Contoh: Palangkaraya)

Method: GET

URL: /api/weather?city=Palangkaraya

Response Output:

JSON

{
    "coord": {
        "lon": 113.8333,
        "lat": -2.2
    },
    "weather": [
        {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 30,
        "feels_like": 34.8,
        "pressure": 1007
    }
}
Catatan Troubleshooting
Jika terjadi error 'EADDRINUSE: port 3000', matikan proses yang berjalan di port tersebut:

Bash

# Temukan PID
netstat -ano | findstr :3000
# Kill process (Ganti PID sesuai hasil di atas)
taskkill /PID <PID> /F
