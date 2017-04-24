knownet-widget
===============================

Jupyter widget for discovery and provenance with the knowledge network

Installation
------------

To install use pip:

    $ pip install knownet_widget
    $ jupyter nbextension enable --py --sys-prefix knownet_widget


For a development installation (requires npm),

    $ git clone https://github.com/oznome/knownet-widget.git
    $ cd knownet-widget
    $ pip install -e .
    $ jupyter nbextension install --py --symlink --sys-prefix knownet_widget
    $ jupyter nbextension enable --py --sys-prefix knownet_widget
