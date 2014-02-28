# &lt;skype-button&gt;

Web Component wrapper for [Skype URI buttons](http://developer.skype.com/skype-uris/skype-uri-tutorial-webpages) using [Polymer](http://polymer-project.org)

> Maintained by [Tomek Wytrębowicz](https://github.com/tomalec).

## Demo

> [Check it live](http://tomalec.github.io/skype-button).

## Install

Using [Bower](http://bower.io), run:

```bash
$ bower install --save skype-button
```

## Usage

1. Import Web Components' polyfill and Skype URI Library:

    ```html
    <script src="//cdnjs.cloudflare.com/ajax/libs/polymer/0.1.4/platform.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/polymer/0.1.4/polymer.js"></script>

    <script type="text/javascript" src="http://cdn.dev.skype.com/uri/skype-uri.js"></script>
    ```

2. Import Custom Element:

    ```html
    <link rel="import" href="src/skype-button.html">
    ```

3. Start using it!

    ```html
    <skype-button></skype-button>
    ```


## Options

Note that, empty attribute (e.g. `<skype-button listTopic>` is mapped to `"true"`)

For detailed description, please take a look at [Skype URI Tutorial](http://developer.skype.com/skype-uris/skype-uri-tutorial-webpages).


Attribute  | Options                   | Default             | Description
---        | ---                       | ---                 | ---
`name`     | `call`, `chat`, `dropdown`| `call`              | If omitted, "audio call" is implied if any `participants` are specified, and "switch focus to the Skype client" is implied if no participants are specified.
`participants`| *string*               |                     | Coma-separated list of participants. *Required* if `name` is specified.
`listParticipants`   | *boolean*                     | `false`               | Whether to list the participant Skype Names
`video`   | *boolean*                     | `false`               | Whether this is a video call
`topic`   | *string*                     | `""`               | The optional topic string for a conference call, GVC, or multichat.
`listTopic`   | *boolean*                     | `false`               | Whether to list the topic
`imageSize`   | `10`, `12`, `14`, `16`, `24`, and `32`                     | `16`               | Which size of the image asset to use
`imageColor`   | `skype`, `white`                     | `skype`               | Which text color variant of the image asset to use

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

For detailed changelog, check [Releases](https://github.com/tomalec/skype-button/releases).

## License

[MIT License](http://opensource.org/licenses/MIT)