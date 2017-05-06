Bidirectional jupyter widget example
===============================

A widget for accessing and displaying results from the knowledge network. Demonstrates bidirectional changes between the model and the view.

Installation
------------

For a development installation inside a jupyter datascience docker container 

    $ git clone https://github.com/oznome/knownet_widget.git
    $ cd knownet_widget
    $ cd js
    $ /opt/conda/bin/npm install --unsafe-perm --verbose . 
    $ cd ..
    $ pip install -e .
    $ jupyter nbextension install --py --symlink --sys-prefix knownet_widget
    $ jupyter nbextension enable --py --sys-prefix knownet_widget
