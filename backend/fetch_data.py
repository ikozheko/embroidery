from bs4 import BeautifulSoup, Tag
import cssutils


# https://zlataya.info/publ/n_uch/tab/dmc/18-1-0-170

def parse_zlataya_info(filename):
    doc = BeautifulSoup(open(filename, 'r', encoding='utf-8').read(), 'lxml')
    rows = doc.find('table', attrs={'class': 'eBlock'}).find('td', attrs={'class': 'eText'})\
        .find_all('table')[1].find_all('tr')
    for row in rows:
        values = []
        for c in row.children:        
            if type(c) != Tag:
                continue
            
            color = c.attrs['bgcolor'] if 'bgcolor' in c.attrs else None
            text = c.string.strip() if c.string else None
            if color:
                values.append(color)
            else:
                values.append(text)
        yield values


# https://leonardo.ru/articles/colormap-muline/gamma/


def parse_leonardo(filename):
    doc = BeautifulSoup(open(filename, 'r').read(), 'lxml')
    rows = doc.find('table').find_all('tr')

    for row in rows:
        values = []        
        for c in row.children:
            if type(c) != Tag:
                continue

            text = c.string.strip() if c.string else None                        
            color = cssutils.parseStyle(c.attrs['style'] if 'style' in c.attrs else None)

            if text:
                values.append(text)
            else:
                values.append(color['background-color'])
        yield values
