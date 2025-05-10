import { useEffect, useState } from "react";
import { getBaconText } from "../services/baconApi";
import LoadingTextBlock from "./LoadingTextBlock";

function CardText() {
  const [bacon, setBacon] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let isMounted = true;
    const fetchBacon = async () => {
      setLoading(true);
      const fetched = [];
      for (let i = 0; i < 6; i++) {
        try {
          const result = await getBaconText(1);
          if (isMounted) {
            fetched.push(Array.isArray(result) ? result[0] : result);
          }
        } catch (err) {
          console.error(err);
        }
      }
      if (isMounted) {
        setBacon(fetched);
        setLoading(false);
      }
    };
    fetchBacon();
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <>
      {[0, 2, 4].map((startIndex, idx) => (
        <LoadingTextBlock
          key={idx}
          loading={loading}
          title={bacon[startIndex]}
          text={bacon[startIndex + 1]}
        />
      ))}
    </>
  );
}
export default CardText;
