# Wedding Invite Link Management

## How to Personalize Invites for Each Guest

### **Step 1: Base URL**
Your wedding invite is hosted at:
```
https://yourusername.github.io/wedding-invite/
```

### **Step 2: Add Recipient Name**
To personalize for each guest, add `?recipient=NAME` to the URL:

**Examples:**
- For John & Sarah: `https://yourusername.github.io/wedding-invite/?recipient=John%20%26%20Sarah`
- For The Smith Family: `https://yourusername.github.io/wedding-invite/?recipient=The%20Smith%20Family`
- For Aunt Mary: `https://yourusername.github.io/wedding-invite/?recipient=Aunt%20Mary`

### **Step 3: URL Encoding**
Special characters need to be encoded:
- **Space** = `%20`
- **&** = `%26`
- **'** = `%27`
- **"** = `%22`

### **Quick Reference:**
| Guest Name | URL |
|------------|-----|
| John & Sarah | `?recipient=John%20%26%20Sarah` |
| The Johnson Family | `?recipient=The%20Johnson%20Family` |
| Aunt Mary | `?recipient=Aunt%20Mary` |
| Mr. & Mrs. Smith | `?recipient=Mr.%20%26%20Mrs.%20Smith` |

### **Step 4: Send the Link**
Copy the personalized URL and send it to each guest. The envelope will show their name during the animation!

---

## **Alternative: Quick URL Builder**

You can also use this simple method:
1. Go to: `https://yourusername.github.io/wedding-invite/`
2. Add `?recipient=` followed by the name
3. Replace spaces with `%20` and `&` with `%26`

**Example:** For "John & Sarah" → `?recipient=John%20%26%20Sarah` 