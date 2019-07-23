export default class IdeaService{
  constructor(resource){
    this._resource = resource('api/v1/ideas{/id}');
  }

  create(idea) {
    if(idea.id) {
      return this._resource.update({ id: idea.id }, idea);
    } else {
      return this._resource.save(idea);
    }
  }

  list(){
    return this._resource.query().then(response=>response.json());
  }

  find(id) {
    return this._resource
    .get({ id })
    .then(res => res.json());
  }

  destroy(id){
    return this._resource.delete({ id });
  }
}