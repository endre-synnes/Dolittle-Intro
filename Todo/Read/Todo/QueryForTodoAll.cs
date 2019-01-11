using System;
using System.Linq;
using Dolittle.Queries;
using Dolittle.ReadModels;

namespace Read.Todo
{
    public class QueryForTodoAll : IQueryFor<Todo>
    {
        readonly IReadModelRepositoryFor<Todo> _repositoryForTodo;

        public QueryForTodoAll(IReadModelRepositoryFor<Todo> repositoryForTodo)
        {
            _repositoryForTodo = repositoryForTodo;
        }

        public IQueryable<Todo> Query => _repositoryForTodo.Query.Where(_ => true);
    }
}
