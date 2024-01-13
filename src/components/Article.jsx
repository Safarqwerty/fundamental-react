/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
// Import library prop-types untuk melakukan validasi tipe data properti
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { GlobalContext } from '../context';
// Komponen Article menerima props yang berisi title, date, dan tags
const ArticleStatus = ({isNew}) => {
  return isNew && <span>- Baru</span>
}

// const NewArticle = () => {
//   return <span>- (Baru)</span>
// }

function Article(props) {
  const user = useContext(GlobalContext)

    return (
        <>
        {/* Menampilkan judul artikel */}
        <h3>{props.title}</h3>
        
        {/* Menampilkan informasi tambahan seperti tanggal dan tag */}
        <small>
            Date: {props.date}, tags: {props.tags.join(", ")} 
            {/* {props.isNew && "- Baru!"} */}
            <ArticleStatus isNew={props.isNew} />
            {/* {props.isNew && <NewArticle />} */}
        </small>
        <div>
          <small>Ditulis oleh {user.username}</small>
        </div>
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
