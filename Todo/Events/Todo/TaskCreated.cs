using System;
using Dolittle.Events;

namespace Events.Todo
{
    public class TaskCreated : IEvent
    {
        public Guid Id { get; }
        public string Text { get; }
        public string Category { get; }
        public bool Status { get; }

        public TaskCreated (Guid id, string text, string category, bool status){
            Id = id;
            Text = text;
            Category = category;
            Status = status;
        }
    }
}
