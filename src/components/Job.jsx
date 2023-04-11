import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Star, StarFill } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE } from "../redux/action";
import favoriteRemoveReducer from "../redux/reducers/favoriteRemoveReducer";
import favoriteReducer from "../redux/reducers/favoriteReducer";

const Job = ({ data }) => {
  const favourites = useSelector(state => state.favourite.list);
  const dispatch = useDispatch();

  const isFav = favourites.includes(data.company_name);

  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs="auto" className="d-flex align-items-center">
        {isFav ? (
          <StarFill
            color="gold"
            size={22}
            className="me-2 my-auto"
            onClick={() =>
              dispatch(favoriteRemoveReducer(data.company_name))
            }
          />
        ) : (
          <Star
            color="gold"
            size={22}
            className="me-2 my-auto"
            onClick={() =>
              dispatch(favoriteReducer(data.company_name))
            }
          />
        )}

        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;
