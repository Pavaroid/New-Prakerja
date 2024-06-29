import React from "react";

const PersonalInfo = () => {
  return (
    <section>
      <h2>Data Diri</h2>
      <div className="personal-info">
        <p>
          <strong>Nama:</strong> Ahmad Rizal
        </p>
        <p>
          <strong>Umur:</strong> 24 tahun
        </p>
        <p>
          <strong>Pekerjaan:</strong> Mahasiswa
        </p>
      </div>
      <div className="row">
        <div className="col-md-6">
          <img
            src="assets/1.jpg"
            alt="Foto Saya"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <p>
            Nama saya Ahmad Rizal. Saya seorang mahasiswa di jurusan Aqidah dan
            Filsafat Islam dengan minat khusus pada pemikiran Seyyed Hossein
            Nasr dan budaya Sunda Buhun. Saya memiliki semangat yang tinggi
            dalam mengeksplorasi hubungan antara filsafat Islam dan kearifan
            lokal. Selain itu, saya juga aktif dalam berbagai kegiatan kampus
            dan organisasi yang bertujuan untuk mengembangkan pengetahuan dan
            keterampilan saya di bidang ini. Saya juga tertarik untuk belajar
            membuat website Saya berkomitmen untuk terus belajar dan
            berkontribusi dalam memperkaya pemahaman tentang Islam dan budaya
            lokal.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;
