# HTML Markup Documentation for Webmap Templates

This will cover many common elements that you will use when adding content to the sidebar of a webmap template. If an example element has a class(es) or other attributes, be sure to include those when adding your own. Reach out to web services if you would like documentation on more elements.

## Text
-   The ```<p>``` tag is a general purpose text container. Put one paragraph of text per ```<p>``` tag. 
    - attributes: none
    - classes: none
    - Sample:
        ```
        <p>
            insert paragraph here
        </p>
        ```
- The ```<em>``` and ```<strong>``` tags add _emphasis_ and __weight__ to pieces of text. Wrap them around words or phrases within a ```<p>``` tag
    - attributes: none
    - classes: none
    - sample: <br />
        ```
        <p>
            this is <em>italic</em> and this is <strong>bold</bold>
        </p>
        ```
- Headers (```<h1>```,```<h2>```, .... ```<h6>```) establish hierarchy and have to be in order. For example the sidebar header is an ```<h1>``` so subsequent sidebar subheaders should start at ```<h2>``` and work down as appropriate.<br />
Header hierarchy is established by order and nesting. <br />
    - For example, this works:
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
    - and this doesn't:
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

## Containers
- Accordions ```<details></details>``` are collabsible content sections. Use these for content that doesn't need to be viewed by default. Use the ```<summary>``` tag to give a title to the accordion.
    - attributes: 
        - ```<details>```: open 
    - classes: 
        - ```<details>```: "sidebar-details"
        - ```<summary>```: "sidebar-summary"
        - ```<div>```: "sidebar-details-content"
    - sample: <br />
        ```
        <details class="sidebar-details">
            <summary class="sidebar-summary">Read More</summary>
            
            <div class="sidebar-details-content">
                <p>put collapsible content in here</p>
            </div>
        </details>
        ```
- ```<section></section>``` tags convey semantic meaning and group together blocks of related content. They contain a header and may have other containers, text, media or other tags.
    - attributes: none
    - classes: "sidebar-section"
    - template: 
        ```
        <section class="sidebar-section">
            <!-- header goes here -->

            <!-- content goes here -->
        </section>
        ```
    - sample: 
        ```
        <section class="sidebar-section">
            <h2>section header</h2>
            <p>section section</p>
            <h3>section subheader</h3>
            <p>section text</p>
        </section>
        ```
- Lists. Ordered lists ```<ol>``` display content that has a set hierarchy and must be presented in order. I.e. a checklist while unordered lists ```<ul>``` display content without any set hierarchy and order doesn't matter
    - attributes: none
    - classes: "sidebar-list"
    - sample: <br />
        ```
        <ol class="sidebar-list">
            <li>list item</li>
        </ol>
        ```
- Unordered lists: use unordered lists ```<ul>``` to display content where order doesn't matter and there isn't any set hierarchy. 
    - attributes: none
    - classes: "sidebar-list", "sidebar-ul"
    - sample: <br />
        ```
        <ul class="sidebar-list sidebar-ul">
            <li>list item</li>
        </ul>
        ```
- ```<div>``` are general purpose containers. Use them to group elements to achieve specific layouts.

## Images
- The ```<img>``` tag is a container for static media (images)
    - attributes: 
        - ```src```: the path to the image. Can be a URL or a relative path. **required**
        - ```alt```: descriptive text for users that can't view images. **required**
    - classes:
        - "sidebar-img"
    - sample: <br />
        ```<img src="www.image.come/myimage.jpeg" class="sidebar-img" alt="image description">```<br />
        ```<img src="./path/to/file.png" class="sidebar-img" alt="image description">```
- You can also put an ```<img>``` inside a ```<figure>``` tag if you want a caption included. Like this:
    ```
    <figure class="sidebar-figure">
        <img src="" class="sidebar-img" alt="" />
        <figcaption>img caption</figcaption>
    </figure>
    ```

## Forms
- Use the ```<form>``` tag to allows users to toggle map layers and set filters
    - attributes: 
        - value: layer name to toggle on form change **required**
        - id: unique id for the form (can be the same as value) **required**
    - classes:
        - "sidebar-form"
        - layer toggle forms: "sidebar-form-toggle"
        - layer filter forms: "sidebar-form-filter"
    - Layer Toggle form
        - template:
            ```
            <form class="sidebar-form sidebar-form-toggle">
                <fieldset class="sidebar-fieldset">
                    <legend></legend>

                    <label>
                        <input type="checkbox" id="" name="" value="" checked>
                    </label>

                    <label>
                        <input type="checkbox" id="" name="layer" value="" checked>
                    </label>
                </fieldset>
            </form>
            ```
        - sample:
            ```
            <form class="sidebar-form sidebar-form-toggle">
                <fieldset class="sidebar-fieldset">
                    <legend>toggle layers:</legend>

                    <label>
                        counties
                        <input type="checkbox" id="county-outline" name="layer" value="county-outline" checked>
                    </label>

                    <label>
                        municipalities
                        <input type="checkbox" id="municipality-outline" name="layer" value="municipality-outline" checked>
                    </label>
                </fieldset>
            </form>
            ```
    - Layer Filter Form:
        - TBD
