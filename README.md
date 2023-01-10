# Component Preview - Strapi Plugin

Component Preview plugin is used to view the actual component through a custom field in strapi. This plugin helps to give a live preview the component we are using. That helps to easily understand the component using.


## Getting Started

The plugin can be used in strapi version above 4.4 (versions that support custom fields).


### To Install

1. Go into your strapi project.

2. Run the npm command ```npm i strapi-plugin-componentpreview```

3. The plugin will be added to your strapi project.

Inorder to achieve the url of the file uploading it must be specified in the .env file as **FILE_UPLOAD_URL**. This url need to be the base url of the admin.


### Adding & Accessing URL

1. Add this to the ```REACT_APP_FILE_UPLOAD_URL="YOUR_BASE_URL_HERE"``` .env file of your project.

This file is added in order to access the **FILE_UPLOAD_URL** in the plugin.


## How To Use

1. Create a new field form a content type.

2. Select custom fields.

3. **Component Preview** field will appear there.

4. Select this field and name it accordingly ("component_preview" is used commonly for more understanding) and save.

5. Add the url of the file into the url field. All the images corressponding to the components need to be added into the uploads folder. The url must start with **uploads/your_folder_name/your_file_name**.

6.  Select the content type from the content manager.

7.  Click on the preview button from the content type builder and then the component preview will pop up.


***NOTE: The images will not be saved into the database with the components.***