type Props = {
  className?: string;
  onClick?: () => void;
  label?: string;
};

const RemoveIcon = ({ className, onClick, label }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 10 10"
      fill="none"
      className={className}
      onClick={onClick}
      aria-label={label}
    >
      <rect width="10" height="10" fill="url(#pattern0_158_1815)" />
      <defs>
        <pattern
          id="pattern0_158_1815"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_158_1815" transform="scale(0.00195312)" />
        </pattern>
        <image
          id="image0_158_1815"
          width="512"
          height="512"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QIFBRMKQLLppAAAAc5QTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAd1vHfwAAAJl0Uk5TAAECAwQFBgkKDA0ODxARFxgbHSAhIiMkJSYnKCkqKywwMTI4Ozw+P0BCQ0ZHSElNTk9QaGlqa3Fyc3R1dnh5ent8fX5/gIGCg4SFhoeIiYqLjI2Oj5CRm5ydn6CnqKmrra6xsrO0trm7vMHDxMXNzs/Q0tXW2Nna29zd3t/g4eLj5OXm5+jp6uvs7e7v8PHy9Pf4+fr7/P3+HAO/kQAAAAFiS0dEmQHWNqgAABUzSURBVHja7d37f1NFGgfgAuewiFZQN22aJo2g7npDcQVdUUnSXHrNpVW0IqK7XlZ3XdGltqRtmjRNwq7sukpNcvLf7gksWJK2eTNJzpmZ9zu/5sAH5p15533OZWZoaFc77n3ae+zQEJq27dAxO8TH9/zJ+8q56KXLVz98N/LqcycNdJV+zTj53KuRdz+8evlS9Nwr3gd/OzJ8+u0vln+0Go1G9YflK+effBj9pVt7+MnzV5Z/qNohtn5c/uLt08NHfv3t8Imzn5Z+qdYbzVavVovvvziMJKDX9B9+8f1i9X6Ifyl9+vKJ+yPACIav/afW+LVVS19e8BxFr+nTjnoufFmq7gpx/dbXbwWNe/M/8o9GS/v5WjyIHKDP/A/Gr/3cEuL6N2+dOHzn10fPXmu0NascGjcBAj1Kf3M8VLbaQlz/+uyjd34//em/2wdAo1pIeUx0ng7N9KQK1T1CfOvT082fR94uWY292krKh1VAh/zvS63sGWCr9Prj9u9/+GKnsXfLh1AH6LD+h/L7BHjnk5fsC84t1/b5vVqOj2IVUD3/j8bL1f0CvHzOviL6Y32f3xtWdmEEI0Dt+I8sZK394lv/MTY0dPxS44CWnZrAKqBy/p+Yyh4U30vHh7yXD7oAGtTQf7vaZe/QM1cPusDWYBIaVNd/yUL1wPBefbpDBmhqMA0Nquq/9EqH4L7/2NCxdztcAw3q57/7LW2vE5Fb9YMvgga189/9J0KRA+8D3K8E16BBFf23ZnUIbO3OfYDnr9zulCgaN6BB9fx3o2NYb1953r705Plip5Fia/AiNKiW/y6WO0e1eP5k8+pTS6WOYwUa1Mx/zVZaOnXn6kfOfNV5EYAG9fJf81HQX37/0N3rh9/8tvPl0KBW/rPbt2/85t4f8CQqnRNGDRpUx3+1zot6JfHbI/dLhmBoq/OIgQa18Z/dtkLBXWW9MZ5aJSQNaFAT/zUaq6lx48GyMV3onDYa0KAK/uscx1oh3Yo60xeudE4c1S1oUHb/bXUu56xK2Ge2l46JtQY0yMF/jbXEXqAzRxezFA2GoUF5/Rem+C+7uDfnzJEpigYrMWhQVv/FKhT/Te2DuUPGBDTIwX8Txn6FPDTIz3+tRSRRg35oUDb/+QX9Bw1y919rIRknahAjQKb4E/1H+OifqMFNaFAu/2324D9okLn/oEH2/hPT4DQ0KIf/pnv3X5sG8wQNlqBBOfxXIvgvn+4GbtAgP/9Bg9z9Bw1y919raTldhgb18F95WgBsRA3WoUF3/Vfvp/9a0osfGtTDf37BAEGD/PwnpsF5aNAN/80Pwn9tGlyHBlX233qPm35Dg/z8Bw0y91+7BovQoJr+Kwr6r1WDSWhQTf8l/X0JienJQIMq+i/TL5xBg/z8J6bBDDTohP8yTvgPGuTuPzENRqHBQfsv6pD/xDS4Dg0O2n/rjvkPGuTuP2iQu/+ENFiEBgfnv6LD/mstQGM0DY5hBAwi/mM0/8UGRzFokJ//BDXoRQ7od9d73fEfNMjef2IanIEG++u/Gff8Bw1y9x80yN1/0CB3/7VpkLIg5aDBfvkvRym7Fp17EGeOzECDsvlvxkF42Rq8CA3K5b+Lg/afkAZXocHe/bcqif/aNLgJDcriv82M8+QyfZGb0KAc/rsZceNlTKIGV6HBXvy3KpX/WstTmgYj0KDoFIvQ/OcWtqBBdv6DBtn7T1CDAawC3XZtQFL/QYPc/ddaqEZu1gkanIMGu5tYcwT/1W9G3CcWNMjPf9Agd/9Bg8z9Bw2y91+rBuehQaf9N++XqDPJGgxAg538F1DEf9Agd/+1Fq7RDWjQKf9tROUjFTTIz39iGpyEBvefRJNK+a9dg9vQ4OD9ty2R/8Q0OAsN7u2/WfX8J6TBbWhwb/9tK+g/aJC7/6BB7v5rLWQXoMHB+W9BfkKZI7MlaHAw/ivNKgAoqgY3oMHd/ttQ2n/QIHf/tRa0C9Bg//23oA6diBrchgbv+m9bA/9Bg9z9J6TBDfYatP23oYn/oEHm/mvVYICoQc51gF0u0/wXMNQrl40ANNgv/6nZRfbwzkGDvfsvp2ySpGpwlucqYHpm9fMfNMjdf2IanOSnQSM4qaf/2tIcQYN1fhps+q9O8Z/iyyOx0GGnQbr/lC+QjcAcNCjqvzkdOqWpwTo0KJAWc5qkRXNsEhoU8d+kLjiianCBRyVo00h//0GD3P0HDTL3n6AGM7rXAaYns8GyJIYG+fkPGuTuP2iQu/+Eyl99NUj1n7YYYq5Blv4T02BkTMslMMLQf0JFUE1HDTb9hxfkyBrUjkFs/+PQIPwHDXL3X1sxnGOmQaL/ckxejWSnQfivLSHOcdIg1X98Ppanbome00KDtv9y2Eq/HUU3mKCI6L8bc7w+kSRqsKj6tGgmuyL8t2clyEKDZP/x2yaBhQbhvwOLY1LnrCvcOfYgJx2quTDG9PNo0vZY6mqQ6D+2m6XprkH4j0CkWZoG/QquAoaf5j/WG6YSP5ItqrdJUnOTLIr/eG+SRdZgaWZEuW3yZkrwH18Nwn9916BSn0oawSj8x1iD8B9vDcJ/vDUI/wmUzPpokO4/HJmzu2iO6qJBqv+iODRLSw3Cf7w1CP/x1iD8x1uD8J8jGpT2+DzigYnwX88alPIAzeaRqfBf7xqsqapBmv9q8N/BRXREVQ1S/Ydj0/XUIPzXt0J6nqTBsFwdaY6FSf6bh/+01CD857wGVyTSoO2/FfiPrQbhP+YahP8GocFNZbbUIG54sgn/6alB+I+3BuG/QWnQT9LgpssatP23SfKfH/7rNrVOKKBBsv8msP5rqEH4Tw4NTrvVvebINPwnhQZHXelgcxT+G3iJnZFXg1T/ZeA/BzToc7yTTR/854wGy1JqkOi/MvzXswZnZNQg1X8z8F/vpfYiRYNbTmqw6b8tiv8W4T8tNQj/8dYg/CenBtdiznS4EYytwX9Oa7AojQaJ/ivCfy5oMD34Tjc9afiPsQbhP/c0uO6+Bqn+W4f/BqDBmPsapPovBv9pqUH4j7cG4T/XNZh0U4NU/yXhPy01CP8ppMFk/zVo+JPwH18Nwn/SjIBRVzRI9t8o4q+jBuE/mXKAz3ENkv3nw/yXRoNW/zTY9J8F/7HVIPzHW4Pwn6QatBzRINF/FvznuAYrBA2Wp3oNizkyVSb4rwL/Oa7BcN4BDRL9lw/Df1pqEP7jrUH4T3INhigazAtr0PZfnuK/EPznlgansyQNjgutAsY4yX/ZafhPRw3Cf8w1CP/x1iD8p8oIIGow3l2gjGCc6D/EXw0NlkPdaND0hcrwH18Nwn+8NQj/6anBAk2DTf8V4D/FNBjvnwap/ovDf6pp0KJosOk/C/5jq0H4j7cG4T/NNVg9WINN/1XhP7YahP9YaDC0jwZt/4XgP8YahP+4aDC7pwZt/2XhP+U1mKZoMLuHBm3/UUqI1TT8J7cGU1tCGiT6bysF/+mhwZZA2gMH/uOlwdRuDRrjKfhPIw2udadBqv/W4D+tNJi4F05zJAH/MdYg/Mdbg/Afbw3Cf3pqcDxUoWgw6fMlKf6rhMbhP8U0OEVJ7NeXlq5TFosp+E9PDdZu367Bf5w1aFnwn8YaJNzeIdwygv/01iD8x1yD8B93DcJ/7DUI/zHXIPynswYTBA3u478E/MdZg/Afbw3Cf6w1CP8x1yD8x1uD8B9rDcJ/vDUI/2mpwRBZg4UQ/KejBlPLdUr468sp+E/HdtT3wQ6hDrB2PvAdRW9pOQCWblMGwO0lDAA9l4DkdVIZWLuexBKgZRGYpxaBeRSBGjIwXibfDq6W8RqobvEfIX3/t+u7QdwI0ir/TyS6vRWcwK1gbVrzYVC5y9eCrDIeBumT/z2pQvePgwt4HKyN/0j7v+yxiww0yM1/0CBz/0GD3P0HDWrnP3wYAv/10KBBxf2XLPT6cWgBh4Mo7L/0SqPntoLPA9j5Dxrk4z/CFjHQoKr+I7wIXt/Z6fyeoLUGDarovxuE9L78wQfLhMtuQIPK+e8iwX+1QsrnSxUIe4mVL0KD+vnPqtzdKrZiQYMs/beWuLtZdGINGuTov+zive3iF7PQoGb+IxwYUZn69cCIqQrhwAhoUCf/NbYePDJmqwENsvLfauuhUavQoDb+I3z8U0i3HhuXJmiwAQ0q4D/KUSGVcPvBkWGKBregQX3810oHaFAD/4W78V8rHmgaxOaBEvsvVunKf618IGmwEoMGdfFfSwEJDfLzX8tfAQ0q7D+/kP9aEUHUIA4R18Z/0KAe8Sf6L96phDeCcaIGMQLk8t+msP+ENLgJDerjP2iQuf+gQdX9N92r/8Q0OA0NSuK/EsF/+TS9cLc1mCdosAQN6uM/aJC7/6BB7v6DBvX1X3m6+4LdHJkuQ4MK+K/eN/8JabAODSrgP79Qmjb80CA3/0GDSvlvvv/+E9PgPDQorf/W472U6bYG16FBXv6DBrn7DxrUx39FEf+1a7AIDSrqv6S/D4nZ8CehQTX9l+lPcW56MtAgM/9Bg1L7LzN4/4lpMAMNauM/aFBa/0Wd8Z+YBqPQ4MD9t+6M/8Q0uA4N6uM/aJC7/6BB+fxXdNR/QhosQoODiv8YzX+xQZXiRjBG0+AYRoAu/oMG5Zn/Xlf8J6hBL3KAJv6DBmXx34xb/hPT4Aw0qI3/oEHu/oMGufsPGnTbfznKsrvo1IMYW4OUgiQHDTrqvxnnCm9zZAYalM1/FwfqvzYNXoQGHfPfqhT+E9LgKjTojP82M06X3LYGN6FBWfx3M+L8y3imL3ITGhy8/1Yl8p+QBlehwR66OELznzvFtumlaTACDWrjP2iQuf+gQQfzf0BK/wlqMIBVQBf/QYMOdewcwX/1mxG3S2xzLHKzTtDgHDSojf+gQe7+gwa5+w8aZO4/aFAG/837pUmphn8eGuyb/wJK+E9QgwFoUBf/QYNu+m8jKltJbQSjG9AgL/9BgwPoxEmV/CemwUlosEf/bcviv3YNbkODPflvVjX/iWlwFhrcx3/byvlPSIPb0KA+/oMGufsPGnTUfwuyl9CmdwEaHJj/SrPyF9DmyGwJGuzefxvq+k9MgxvQoD7+gwYd8d+CKqWz6VmABrvy37by/hPS4DY0qI//oEFx/21o4T8hDW6w16BG/oMGxcolmv8ChmLl0iEjQNQg5zqA7D8VwWQEoMH++C+n6CSx01sOGjywg2Z185+YBmd5rgJa+g8a7KJzJnX0n5gGJ/lpsOm/OsV/aqdHe5kjaLDOT4N0/6ldIBELXXYapPpvTn0iGYE5aFBwWuS0mBZNDdahQRH/TepRHJtjk9BgS2msu//ENLjAoxJk4T9okLv/oMF9uyKzwa8kImswo3sdwMh/0CB3/0GD3P0HDQr6T9NimMgffTXI0H/Q4AMpMMLPf2IajGi5BNr+4/6CFPUlOB01SGXQnN4Pxbh2A2f/QYPc/QcNUv2XY/EwxMZQjpkG2fuPuQap/mPzsbTpmeOkQdt/OWyl3loSU7bEz2mhQSJ8bsxx+kTO7pQbPDTYHOxF+E9Ug0Xl0yLZf+w+jPCy0CD8x1uD9n+SdKjiAsePI80x0uRYV3hyEP3HdbMs4vZo6moQ/uOtQcNP8x/jDTONwCxNg371uqi5SRLFf7w3SSJ+JF1Ub5Os5hFKJfivXxoszSi3TR78x1qDRjAK//VXg0p9Kgv/8dYg/Mdbg/Afaw3S/YcjU34lk0YapPovikOTdqMpqosG4T/eGoT/eGsQ/uOtQfiPtwaJB+bBf71pUNbjE5tHZsJ/jmhQzgNUaf6rwX8Ha7Cmqgap/sOx2QciKqKqBuE/3ho0x8Ik/83Df50gNU/SYFiuiQT/8dag7b8V+M9ZDa7Io0H4j7kG4T/eGiRueLEJ/3WjwU1ltlSB/3hrEP7jrUHbf5sk//nhv+406CdpcNNlDZL9N4H1v9uunZBfg/Afcw2aI9Pwn/sanHZrepmj8J8cGhw13fnn0fyXgf/EiZWRV4OmD/6TR4M+0/l/Gsl/ZfivVw2WpdQg1X8z8F+vGpyRUINN/21R/LcI//VOrUWKBrcc1SD8x1uD8B9vDRrB2Br8J58G12LOTDii/4rwXz81WJRGg6YnDf/JqsH04Ccd/Mdag1T/rcN//dfgugQapPovBv/1X4Mx9zUI//HWIPzHW4NU/yXhv0EBLOmmBuE/3ho0/En4TxUNJvuuQfiPuQbJ/htF/Ac7AkZd0SD8x1uDZP/5MP8HnwN8jmuw6T8L/lNLg1b/NAj/8dYg/Mdag0T/WfCf0xq0nNGgOTJVJvivAv85rcEKQYPlqV6nJdF/+TD857QGw3kHNAj/8dYg/Mdbg7b/8hT/heA/dzQYomgwL6xBY5zkv+w0/OeWBqezJA2OiwQI/mOuQfiPtwbhP94aNIJxov8Qf3dHAFGD8e4mqukLleE/nTRYDnWjQfiPtwbhP9YabPqvAP/pp8ECUYNU/8XhP3k0GO+fBpv+s+A/HTVoUTQI//HWIPzHW4NN/1XhP301WD1Yg/Afaw3a/gvBf/prMLSfBuE/3hq0/ZeF/zhoMLunBm3/UZaQ1TT8J7MG0xQNZvfQINF/Wyn4T24NpraENGj/QfiPkwZbJrIxnoL/eGkwtUuDh8wgyX9r8J8aGlzrUoOGJw7/8dNgwnMvBwxfuAb/8dPg9cnhu9c/cubL2/AfPw1afzvzyJ3LTy2V4D+OGiwtnW5WASfPFzsvAJXQOPynkgbHQ5XOKWD7whP2xc9f6bwAZKfgP9U0ONVZgzufvWxfem65Bv/x1GAt/4adLSI/1OE/nhq0dmYPDx17t+MtA/hPVQ12vL235BnyXob/+Grwo6eGnrkK//HV4MfPdsoA8J/WGrQHwPH34D++GrzsHRqK/deC/7hq8NKx5n2A6r7+S8B/6mswsa8G6/8K28v7S5/swH88Nbjz+Vn7gsdfL1nwH0sN/hRqPgsYOv3ZLfiPowZvf/fCHeA9evbvFvzHUIPfv/bYnd8Pn3jrm9YR8PO3Caz/OtUBieW2Jz7r79wr8Y3ghb8+8ESoWvrqTc9R9JtOq0D06wfP/dv5/p3f3V/ijww/9+fyL9W7aaBeqxaXXhzG/NcrBzx6Zmm7Vvt/pq/v/PTda6NHdq0SD516/U/Ld+4IVW8tf3T+1MPoMt3a8dMXPi/cFX/tn5+HXnisJcU/ceZc7L3LV5dSkXPPn8T013EZeOLlP84tffTxxx9eCp99Ys8C/7j36cfQUTq3w56nnn3We2xX9P8HDNKTtD+YhqkAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDItMDVUMDU6MTk6MTArMDA6MDD5R55SAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTAyLTA1VDA1OjE5OjEwKzAwOjAwiBom7gAAAABJRU5ErkJggg=="
        />
      </defs>
    </svg>
  );
};

export default RemoveIcon;
