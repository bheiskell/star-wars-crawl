# Star Wars Title Crawl

This repository gives users of FoundryVTT a way to show a customizable title
crawl to their users without needing to manage videos.

## Installation

This project does not require compilation, but it does fetch the title crawls
using AJAX. Meaning, it must be accessed through a web server to work
correctly.

Download and extract this repository into your FoundryVTT's Data directory.
This documentation extracts it at `Data/resources/star-wars-crawl`.

## Creating a Title Crawl
To create a Title Crawl, create a new file in the `sessions` folder, e.g.,
`session-1.txt`.

Title Crawls use the following format.
```
Episode IV
A NEW HOPE

It is a period of civil war. Rebel spaceships, striking from a hidden base,
have won their first victory against the evil Galactic Empire.

During the battle, Rebel spies managed to steal secret plans to the Empire's
ultimate weapon, the DEATH STAR, an armored space station with enough power to
destroy an entire planet.

Pursued by the Empire's sinister agents, Princess Leia races home aboard her
starship, custodian of the stolen plans that can save her people and restore
freedom to the galaxy.
```

Test your title crawl by navigating to your FoundryVTT server:
```
https://your-server/resources/star-wars-crawl/index.html#sessions/session-1
```

## FoundryVTT Macro

A JavaScript macro for FoundryVTT is included: `foundry-vtt-macro.js`.

This macro uses the
[VTTInlineWebviewer Module](https://github.com/ardittristan/VTTInlineWebviewer)
to launch an iframed window on all of your player's screens.

The macro will prompt for a session number. Note, it does not verify that
session exists before launching the window.

Alternatively, you could modify the HTML of a Journal to iframe in the same
URL, but when shown to players Journals are tiny.

## Customizing the Image

At the end of the credit crawl, the animation pans to an image. This repository
comes pre-loaded with the ship my party uses. You can easily substitute this
image for another ship or planet by replacing `pan-image.png`. Use the png's
transparency to avoid blacking out stars in the background.

## Troubleshooting
Errors are logged to the JavaScript console. Use your browser's Web Developer
tools to open the console to troubleshoot problems.

## Credits
This project is a trimmed down version of
[Kassel Lab's Star Wars Intro Creator](https://starwarsintrocreator.kassellabs.io/).
See LICENSE for additional details.
