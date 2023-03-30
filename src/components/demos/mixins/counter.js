//API -axios.get....call RestAPI from spring/web api/django
//reusable library/testable

const counter = {
  data() {
    return { count: 0 };
  },
  methods: {
    increment(){
        this.count++
    }
  },
};


export default counter