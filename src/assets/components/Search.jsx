import styles from '../components/RentalDeals/RentalDeals.module.css';

export default function Search({ search, onSearchChange }) {
  return (
    <>
      <div
        className={`${styles.search} m-auto input-group rounded-2  shadow    `}
      >
        <label htmlFor="search"></label>
        <input
          type="text"
          name="search"
          className={`styles.input form-control ps-5 pe-2 py-3 position-relative border-0 rounded-3 z-2 `}
          id="search"
          placeholder="Search By Name"
          value={search}
          onChange={e => onSearchChange(e.target.value)}
        />
        <span className="input-group-text  rounded-3 z-3 border-0  d-flex justify-content-center align-items-center bg-transparent position-absolute top-0 start-0 bottom-0">
          <i className="fa-solid fa-location-dot"></i>
        </span>
        <button
          className={` text-white z-3 rounded-2 border-0 bg-primary position-absolute m-2 py-2  px-5 ${styles.searchBtn}`}
        >
          search
        </button>
      </div>
    </>
  );
}
