import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  Box,
  Button,
  Typography,
  ModalLayout,
  ModalBody,
  ModalHeader,
  FormGroup,
  Label,
  Input
} from "@strapi/design-system";

const preview = ({
  //All these parameters are passed from admin\src\index.js

  attribute,
  value,
  onChange,
  name
}) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
       <Box>
      <Typography variant="pi" fontWeight="bold">
        Button Preview
      </Typography>
      <Box paddingTop={2}>
        <FormGroup>
          <Label htmlFor="testin">Text</Label>
          <Input
            type="text"
            id="testin"
            value={value}
            onChange={(e) => {
                onChange({ target: { name, value: e.target.value, type: attribute.type } })
            }}
          />
        </FormGroup>
      </Box>
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
