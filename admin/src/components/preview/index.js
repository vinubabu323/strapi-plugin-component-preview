import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  Box,
  Button,
  Typography,
  ModalLayout,
  ModalBody,
  ModalHeader,
} from "@strapi/design-system";

const preview = ({
  //All these parameters are passed from admin\src\index.js

  attribute,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <Box>
      <Box paddingTop={2}>
        <Button onClick={() => setIsVisible((prev) => !prev)}>
          <Typography>Preview</Typography>
        </Button>
      </Box>
      {isVisible && (
        <ModalLayout
          onClose={() => setIsVisible((prev) => !prev)}
          labelledBy="title"
        >
          <ModalHeader>
            <Typography
              fontWeight="bold"
              textColor="neutral800"
              as="h2"
              id="title"
            >
              Preview
            </Typography>
          </ModalHeader>
          <ModalBody style={{ height: "auto", maxHeight: "100vh" }}>
            <img
              style={{ width: "100%" }}
              src={FILE_UPLOAD_URL + attribute.options.url}
            />
          </ModalBody>
        </ModalLayout>
      )}
    </Box>
  );
};

//default value if no value is given

preview.defaultProps = {};

// validation
preview.propTypes = {
  attribute: PropTypes.object.isRequired,
};

export default preview;
