# Gitlab Auto MR
This module will help you automate the process of moving files from one project to another.
## CLI
Trigger the functionality of this module:
```
auto-mr
```
Using the `-f`/`--file` flag you can set the path to the config file relative to the source project's root directory:
```
auto-mr -f ./path/to/auto-mr.config.js
```
## Docs
The following is an example of an `auto-mr.config.js` file:
```js
module.exports = {
  token: '123abc',
  host: 'gitlab.domain.com',
  project_id: 123,
  target_branch: 'master',
  files: [
    {'dest/static/css/main.css' : 'assets/main.css'},
    {'dest/static/js/main.js' : 'assets/main.js'}
  ],
  assignee_id: 1
}
```
|key|required|type|description|
|---|---|---|---|
|token|yes|string|Can be obtained at the target project's `/profile/personal_access_tokens` settings page. Make sure to check the 'api' option under 'Scope'.|
|host|yes|string|The host address of the target project.|
|project_id|yes|integer|ID of the target project.|
|target_branch|yes|string|Existing branch name at the target project to which a new feature branche will be merged if accepted.|
|files|yes|array|An array of objects, stating the file path relative to the root of the source and the target project respectively (`{source : target}`).|
|assignee_id|no|integer|User ID of the person to which the new merge request at the target project should be assigned.|
