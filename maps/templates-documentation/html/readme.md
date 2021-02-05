# HTML Markup Documentation for Webmap Templates

This will cover all the common elements that you will use when adding content to the sidebar of a webmap template. If an example element has a class(es) or other attributes, be sure to include those when adding your own. Reach out to web services if you would like documentation on other elements.

## Text
-   The ```<p>``` tag is a general purpose text container. Put one paragraph of text per ```<p>``` tag. 
    - attributes: none
    - classes: none
    - Sample: <br />
        ```<p>write text here</p>```
- The ```<em>``` and ```<strong>``` tags add _emphasis_ and __weight__ to pieces of text. Wrap them around words or phrases within a ```<p>``` tag
    - attributes: none
    - classes: TBD
    - sample: <br />
        ```<p>this is <em>italic</em> and this is <strong>bold</bold></p>```
- Headers (```<h1>```,```<h2>```,```<h3>```....```<h6>```) are self explanatory. The only thing to know is a header hierarchy _must_ be established and respected. The default sidebar header is an ```<h1>``` - do not add others. Header hierarchy is established by order and nesting. <br />
For example, this is acceptable:
```
    <h2>subheader</h2>
    <div>
        <h3>sub-subheader</h3>
        <p>content</p>
    </div>

    <h2>other subheader</h2>
    <div>
        <h3>other sub-subheader</h3>
        <p>content</p>
    </div>
```
while this is not:
```
    <h3>subheader</h3>
    <div>
        <h2>sub-subheader</h2>
        <p>content</p>
    </div>

    <h3>other subheader</h3>
    <div>
        <h2>other sub-subheader</h2>
        <p>content</p>
    </div>
```

## Images
- The ```<img>``` tag is a container for static media (images)
    - attributes: 
        - ```src```: the path to the image. Can be a URL or a relative path. **required**
        - ```alt```: descriptive text for users that can't view images. **required**
    - classes:
        - "sidebar-img" this applies the standard styles to images. Can be edited in ```styles.css```
    - sample: <br />
        ```<img src="www.image.come/myimage.jpeg" class="sidebar-img" alt="image description">``` <br />
        ```<img src="./path/to/file.png" class="sidebar-img" alt="image description">```

## Lists
- Use ordered lists ```<ol>``` to display content that has a set hierarchy and must be presented in order. I.e. a checklist or step-by-step guide
    - attributes: none
    - classes: "sidebar-list"
    - sample: <br />
    ```
        <ol class="sidebar-list">
            <li>list item</li>
        </ol>
    ```
- Unordered lists: use unordered lists ```<ul>``` to display content where orer doesn't matter and there isn't any set hierarchy. 
    - attributes: none
    - classes: "sidebar-list", "sidebar-ul"
    - sample: <br />
    ```
        <ul class="sidebar-list sidebar-ul">
            <li>list item</li>
        </ul>
    ```

## Forms
