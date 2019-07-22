export default class IdeaService{
  constructor(resource){
    this._resource = resource('api/v1/ideas{/id}');
  }

  create(idea) {
    return this._resource.save(idea);
  }

  list(){
    return this._resource.query().then(response=>response.json());
  }

  destroy(id){
    return this._resource.delete({ id });
  }
}