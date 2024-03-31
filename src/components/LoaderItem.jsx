import ContentLoader from "react-content-loader";

function LoaderItem() {
  return new Array(3).fill().map((_, i) => (
    <ContentLoader
      key={i}
      speed={1.5}
      width={350}
      height={407}
      viewBox="0 0 350 407"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="30" y="20" rx="3" ry="3" width="278" height="263" />
      <rect x="34" y="326" rx="3" ry="3" width="120" height="32" />
      <rect x="232" y="325" rx="3" ry="3" width="76" height="32" />
      <rect x="34" y="371" rx="3" ry="3" width="42" height="28" />
      <rect x="207" y="374" rx="3" ry="3" width="101" height="24" />
    </ContentLoader>
  ));
}

export default LoaderItem;
