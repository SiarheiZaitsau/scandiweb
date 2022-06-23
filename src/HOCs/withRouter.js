import { useParams, useNavigate, useLocation } from "react-router-dom";

function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    const navigate = useNavigate();
    const location = useLocation();
    return (
      <Children
        {...props}
        navigate={navigate}
        match={match}
        location={location}
      />
    );
  };
}
export default withRouter;
