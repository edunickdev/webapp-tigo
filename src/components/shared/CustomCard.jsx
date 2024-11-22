import { Card, CardBody } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const CustomCard = ({info}) => {
    const navigate = useNavigate();

    return (
      <Card
        isPressable
        onPress={() => navigate(info.route)}
        className="grid grid-cols-6 col-span-3 hover:bg-blue-200 transition-all duration-300"
      >
        <CardBody className="overflow-hidden col-span-6 grid grid-cols-8 p-5">
          <h3 className="text-2xl text-center py-3 font-semibold col-span-8">
            {info.title}
          </h3>
          <div className="flex justify-center items-center col-span-8 gapx">
            <img className="mx-1 w-28 h-20" src={info.img} />
            <span className="text-medium text-gray-600">
              {info.description}
            </span>
          </div>
        </CardBody>
      </Card>
    );
}


export default CustomCard;