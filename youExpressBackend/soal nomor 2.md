untuk menyediakan database dengan kemampuan di soal, maka data yang akan disimpan di dalam database untuk di fetch adalah :

Transportation Options :
ID Kendaraan -> String
SortOrder -> Number(Integer)
nama kendaraan -> String
Berat Max -> Number(Integer)
Gambar -> String(nama link)
Harga -> Number(Integer/Float)

User :
ID User -> String
Nama User -> String

pengiriman :
ID User -> String
ID Kendaraan -> String
HandCartHelp -> Boolean
Schedule -> DateTime
koordinat pengiriman -> Array of Array(coordinate long and lat)

dengan demikian, maka costumer dapat membaca informasi yang diperlukan untuk mereka mengerti sebelum memilih untuk opsi mana yang ingin mereka ambil untuk delivery yang akan mereka kerjakan.

selain itu, maka dari setiap alamat yang ingin ditujukan oleh User, aplikasi akan push sebuah koordinat baru ke dalam array database pengiriman kolom koordinat pengiriman (menggunakan mongoDB)

untuk peng optimisasi rute, maka perhitungan dapat dihitung dari koordinat longitude dan latitude, selain dari itu, dapat juga diberi perhitungan dari penembakan ke GPS Google Map untuk mengkalkulasi seluruh jumlah jarak ketika semuanya digabungkan berdasarkan setiap urutannya (contoh, apabila ada 3 koordinat, maka sistem akan menghitung jarak pengiriman 2, 3, 1 | 3, 2, 1 | 1, 2, 3 | 2, 1, 3 | 1, 3, 2 | 3, 1, 2 | dan akan ditentukan yang jaraknya akan jauh lebih efisien) setelah itu, maka sistem akan otomatis mengambil jarak yang paling efisien untuk meng optimisasi pengiriman (secara jarak dalam kasus ini).

dalam database pengiriman juga akan diberikan kolom HandCartHelp untuk memilih apakah jasa ingin dibantu diturunkan dengan orang lain dan juga tanggal Schedule untuk menentukan kapankah pengiriman ingin dijalankan (Schedule akan memberikan waktu mereka mengirim request langsung apabila mereka tidak ingin memberikan schedule ke depan, melainkan segera).