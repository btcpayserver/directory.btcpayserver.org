function getOppositePath(props) {
  const path = props.history.location.pathname;
  let oppositePath = ""
  if (path.charAt(1) === "l") {
    const noColorPath = path.substring(7);
    oppositePath = `/dark/${noColorPath}`;
  } else {
    const noColorPath = path.substring(6);
    oppositePath = `/light/${noColorPath}`;
  }
  return oppositePath;
}

export default getOppositePath;
