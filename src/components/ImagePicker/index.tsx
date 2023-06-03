import {
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Image,
  List,
  ListIcon,
  ListItem,
  Checkbox,
} from "@chakra-ui/react";
import React, { useState } from "react";
import CameraComponent from "../Camera";
import axios from "axios";
import { get, flatten } from "lodash";
import styled from "styled-components";

const StyledDiv = styled.div<{ count: number }>`
  height: 400px
  overflow: scroll;
`;

const StyledContainer = styled.div`
display: flex;
justify-content: space-between;
`

const StyledListItem = styled(ListItem)`&&{
    display: flex;
    justify-content: space-between;
}`

const ImagePicker: React.FunctionComponent = () => {
  const [switchVIew, setSwitchView] = useState(false);
  const [loading, setLoading] = useState(false);
  const [segmentations, setSegmentations] = useState([]);
  const [image, setImage] = useState(
    "https://placehold.co/600x400?text=Take a photo"
  );
  const onSwitchView = () => {
    setSwitchView(true);
  };

  const onDone = (image: any) => {
    setSwitchView(false);
    setImage(image);
    getImageInformation(image);
  };

  const getImageInformation = async (image: string) => {
    try {
      setLoading(true);
      const api_user_token = "2a37ff18afed81d3c91495f24c4d657b723ba015";
      const headers = {
        Authorization: "Bearer " + api_user_token,
        "Content-Type": "multipart/form-data",
        "Accept-Encoding": "gzip, deflate, br",
      };
      const file = dataURLtoFile(image, "image.jpeg");
      const formData = new FormData();
      formData.append("image", file);

      const { data } = await axios({
        method: "post",
        url: "https://api.logmeal.es/v2/image/segmentation/complete",
        headers,
        data: formData,
      });

      const { segmentation_results } = data;
      const raw = segmentation_results.map(
        (values: any) => values.recognition_results
      );

      setSegmentations(raw);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const dataURLtoFile = (dataurl: string, filename: string) => {
    const arr: any = dataurl.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[arr.length - 1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  };

  if (switchVIew) {
    return <CameraComponent onDone={onDone} />;
  }
  

  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={image}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">Ingredients</Heading>
          <div style={{height: segmentations.length > 10 ? 400: "100%", overflow: "scroll"}}>
            <List spacing={3}>
              {flatten(segmentations).map((segment: any, index: number) => (
                <StyledListItem key={index}>
                  <StyledContainer>
                    <ListIcon color="green.500" />
                    {get(segment, "name", "")}
                  </StyledContainer>
                  <Checkbox colorScheme="green" defaultChecked={false} />
                </StyledListItem>
              ))}
            </List>
          </div>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2" display={"flex"} justifyContent={"space-between"}>
          <Button
            isLoading={loading}
            variant="solid"
            onClick={onSwitchView}
            colorScheme="blue"
            disabled={loading}
          >
            Take a Photo
          </Button>
          <Button
            isLoading={loading}
            variant="solid"
            onClick={onSwitchView}
            colorScheme="blue"
            disabled={loading}
          >
            Submit
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ImagePicker;
