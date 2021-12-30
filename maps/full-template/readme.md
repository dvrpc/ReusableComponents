# Standard, responsive webmap template


## Includes
    - about modal (add tabs by pulling code from tabs folder)
    - DVRPC extent map overlay to easily re-orient view to the DVRPC region
    - easily append or update map sources and layers

## Getting Started
    - copy folder as root (or folder contents into root) of project folder
    - spin up a local server (live server plugin if using vscode)
    - that's it. Mapbox is the only external source, everything else is vanilla. The rest of the content and styles are up to you. Happy hacking. 

## TODO
    - save working demo
        - include: <fieldset class="overlay-form-toggle-group flex-column">
                            <legend>layer group 1</legend>

                            <select class="overlay-select">
                                <option value="1">layer 1</option>
                                <option value="2">layer 2</option>
                            </select>
                        </fieldset>

                        <fieldset class="overlay-form-toggle-group">
                            <legend>layer group 2</legend>

                            <label class="label-input overlay-form-toggle-group">
                                option a
                                <input type="radio" name="radio-group-1" value="a" checked>
                            </label>

                            <label class="label-input overlay-form-toggle-group">
                                option b
                                <input type="radio" name="radio-group-1" value="b">
                            </label>
                        </fieldset>

                        <fieldset class="overlay-form-toggle-group">
                            <legend>layer group 3</legend>

                            <label class="label-input">
                                layer 3
                                <input type="checkbox" value="3">
                            </label>
        
                            <label class="label-input">
                                layer 4
                                <input type="checkbox" value="4">
                            </label>
                        </fieldset>

## Output (desktop)
![desktop screenshot](./desktop.png)

## Output (mobile)
![mobile screenshot](./mobile.png)