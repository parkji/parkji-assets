Prism.languages.html = {
    'comment': /&lt;!--[\w\W]*?-->/g,
    'prolog': /&lt;\?.+?\?>/,
    'doctype': /&lt;!DOCTYPE.+?>/,
    'cdata': /&lt;!\[CDATA\[[\w\W]*?]]>/i,
    'tag': {
        pattern: /&lt;\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|\w+))?\s*)*\/?>/gi,
        inside: {
            'tag': {
                pattern: /^&lt;\/?[\w:-]+/i,
                inside: {
                    'punctuation': /^&lt;\/?/,
                    'namespace': /^[\w-]+?:/
                }
            },
            'attr-value': {
                pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/gi,
                inside: {
                    'punctuation': /=|>|"/g
                }
            },
            'punctuation': /\/?>/g,
            'attr-name': {
                pattern: /[\w:-]+/g,
                inside: {
                    'namespace': /^[\w-]+?:/
                }
            }
            
        }
    },
    'entity': /&amp;#?[\da-z]{1,8};/gi
};