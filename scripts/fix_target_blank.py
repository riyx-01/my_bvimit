import os
import re

def fix_target_blank(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.tsx') or file.endswith('.ts') or file.endswith('.js') or file.endswith('.jsx'):
                path = os.path.join(root, file)
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()

                # Add rel="noopener noreferrer" where target="_blank" is present but rel is not
                # Regex logic: find <a ... target="_blank" ...> and ensure rel="noopener noreferrer" is there
                # Or just a simple string replacement for target="_blank" (with some intelligence to avoid duplicates)
                
                # Check if it has target="_blank"
                if 'target="_blank"' in content:
                    # If it has target="_blank" but not rel="noreferrer" or rel="noopener"
                    
                    # Instead of complex regex, let's just do a blanket find and replace
                    # If a file has target="_blank" but NO rel="noreferrer", we can replace target="_blank" with target="_blank" rel="noopener noreferrer"
                    # But we need to handle cases where rel already exists.
                    
                    # Regex to find a tag with target="_blank"
                    # <a [^>]*target="_blank"[^>]*>
                    
                    def replacer(match):
                        tag = match.group(0)
                        if 'rel=' not in tag:
                            return tag.replace('target="_blank"', 'target="_blank" rel="noopener noreferrer"')
                        return tag
                    
                    new_content = re.sub(r'<a[^>]+target="_blank"[^>]*>', replacer, content)
                    
                    if new_content != content:
                        with open(path, 'w', encoding='utf-8') as f:
                            f.write(new_content)
                        print(f"Fixed {path}")

fix_target_blank('e:\\study\\bvimitweb\\bv\\bv\\src')
