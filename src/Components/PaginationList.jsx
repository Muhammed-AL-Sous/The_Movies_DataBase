// React Pagination
import ReactPaginate from "react-paginate";

// Translation
import { useTranslation } from "react-i18next";

const PaginationList = ({ pageCount, getCurrentPage, currentPage }) => {
  const { t } = useTranslation();

  const handlePageClick = (event) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const selectedPage = event.selected + 1;
    if (selectedPage <= 500) {
      getCurrentPage(selectedPage);
    }
  };

  return (
    <div className="pagination-wrapper">
      <ReactPaginate
        breakLabel="..."
        nextLabel={t("Next")}
        onPageChange={handlePageClick}
        marginPagesDisplayed={window.innerWidth <= 768 ? 1 : 2}
        pageRangeDisplayed={window.innerWidth <= 768 ? 1 : 2}
        pageCount={pageCount}
        forcePage={currentPage}
        previousLabel={t("Previous")}
        containerClassName="pagination justify-content-center p-3"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        nextClassName="page-item"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        activeClassName="active"
      />
    </div>
  );
};

export default PaginationList;
