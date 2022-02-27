/**
 * Statico site configs.
 */
'use strict';

const scss = require("statico-plugin-scss");
const navigation = require("statico-plugin-navigation");
const schemahelpers = require("statico-plugin-schemahelpers");

module.exports = function(config) {

    // Set the base navigation node.
    config.navigation = {
        top: { 
            home: {
                link: '/',
                title: 'Home',
                pos: 0
            }
        }
    };

    // Add the SASS compiler plugin.
    config.addPlugin(scss);
    // Add the navigation plugin.
    config.addPlugin(navigation);
    // Add the schemahelpers plugin.
    config.addPlugin(schemahelpers);
    
    // Return all our config values.
    // @TODO: You probably want to chenge these.
    return {
        site: {
            title: "Statico Blog Example",
            description: "Template for a blog in statico.",
            headerLogo: {
                url: "/assets/images/logo.png",
                alt: "Site logo."
            },
            authors: {
                "Nobby Nobster": {
                    name: "Nobby Nobster",
                    image: "/assets/images/logo.png",
                    url: "/about/"
                }
            },
            defaultAuthor: "Nobby Nobster",
            publisher: {
                name: "Statico Example Blog",
                logo: "/assets/images/logo.png",
                description: "Example blog in Statico SSG.",
                url: "/"
            },
            copyright: "Copyright &copy; Statico 2018-2022.",
            defaultArticleImage: "/assets/images/logo.png",
            cache: true,
            cacheCssJsMax: "86400",
            cacheImagesMax: "2592000"    
        },
        collectionSpec: {
            tags: true,
            type: true
        },
        lazyload: false,
        taxonomyTypes: ['tags'],
        taxonomyDefs: {
            tags: {
                title: "Tag: (((entry)))",
                headline: "Articles tagged with (((entry)))",
                description: "Posts on this site tagged with '(((entry)))', ordered by date."
            }
        },
        schemaWarnings: true,
        cache: true,
        modes: {
            /*
            staging: {
                hostname: "toonserver.ga1964.com:8081",
                ssl: false
            },
            prod: {
                hostname: "gordonansell.com",
                ssl: true
            }
            */
        },
        assetFilters: {
            justCopyDirs: ['/assets/images']
        },
        scssBuild: ['/assets/scss/main.scss'],
        rssBuildSeparateContent: true,
    }
}
