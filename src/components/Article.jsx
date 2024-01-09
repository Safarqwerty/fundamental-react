// Import library prop-types untuk melakukan validasi tipe data properti
import PropTypes from 'prop-types';

// Komponen Article menerima props yang berisi title, date, dan tags
function Article(props) {
    return (
        <>
        {/* Menampilkan judul artikel */}
        <h3>{props.title}</h3>
        
        {/* Menampilkan informasi tambahan seperti tanggal dan tag */}
        <small>
            Date: {props.date}, tags: {props.tags.join(", ")}
        </small>
        </>
    );
}

// Melakukan validasi tipe data untuk setiap properti yang diterima oleh komponen Article
Article.propTypes = {
  // title harus berupa string dan wajib ada (isRequired)
    title: PropTypes.string.isRequired,
  // date harus berupa string dan wajib ada (isRequired)
    date: PropTypes.string.isRequired,
  // tags harus berupa array yang berisi string dan wajib ada (isRequired)
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// Ekspor komponen Article agar dapat digunakan di tempat lain dalam aplikasi
export default Article;
